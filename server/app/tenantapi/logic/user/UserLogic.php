<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------
namespace app\tenantapi\logic\user;

use app\common\enum\user\AccountLogEnum;
use app\common\enum\user\UserTerminalEnum;
use app\common\logic\AccountLogLogic;
use app\common\logic\BaseLogic;
use app\common\model\user\User;
use app\common\service\ConfigService;
use app\common\service\FileService;
use Exception;
use think\facade\Config;
use think\facade\Db;

/**
 * 用户逻辑层
 * Class TenantLogic
 * @package app\tenantapi\logic\user
 */
class UserLogic extends BaseLogic
{

    /**
     * @notes 用户详情
     * @param int $userId
     * @return array
     * @author 段誉
     * @date 2022/9/22 16:32
     */
    public static function detail(int $userId): array
    {
        $field = [
            'id', 'sn', 'account', 'nickname', 'avatar', 'real_name',
            'sex', 'mobile', 'create_time', 'login_time', 'channel',
            'user_money', 'is_disable',
        ];

        $user = User::where(['id' => $userId])->field($field)
            ->findOrEmpty();

        $user['channel'] = UserTerminalEnum::getTermInalDesc($user['channel']);
        $user->sexCode = $user->getData('sex');
        return $user->toArray();
    }


    /**
     * @notes 更新用户信息
     * @param array $params
     * @return User
     * @author 段誉
     * @date 2022/9/22 16:38
     */
    public static function setUserInfo(array $params)
    {
        return User::update([
            $params['field'] => $params['value'],
        ], ['id' => $params['id']]);
    }


    /**
     * @notes 调整用户余额
     * @param array $params
     * @return bool|string
     * @author 段誉
     * @date 2023/2/23 14:25
     */
    public static function adjustUserMoney(array $params)
    {
        Db::startTrans();
        try {
            $user = User::find($params['user_id']);
            if (AccountLogEnum::INC == $params['action']) {
                //调整可用余额
                $user->user_money += $params['num'];
                $user->save();
                //记录日志
                AccountLogLogic::add(
                    $user->id,
                    $params['changeType'] ?? AccountLogEnum::UM_INC_ADMIN,
                    AccountLogEnum::INC,
                    $params['num'],
                    '',
                    $params['remark'] ?? ''
                );
            } else {
                $user->user_money -= $params['num'];
                $user->save();
                //记录日志
                AccountLogLogic::add(
                    $user->id,
                    $params['changeType'] ?? AccountLogEnum::UM_INC_ADMIN,
                    AccountLogEnum::DEC,
                    $params['num'],
                    '',
                    $params['remark'] ?? ''
                );
            }

            Db::commit();
            return true;

        } catch (\Exception $e) {
            Db::rollback();
            return $e->getMessage();
        }
    }


    /**
     * @notes 使用传递租户id保存记录
     * @param array $params
     * @return string|true
     * @author yfdong
     * @date 2025/01/17 01:11
     */
    public static function adjustUserMoneyHasTenantId(array $params)
    {
        Db::startTrans();
        try {
            $user = User::find($params['user_id']);
            if (AccountLogEnum::INC == $params['action']) {
                //调整可用余额
                $user->user_money += $params['num'];
                $user->save();
                //记录日志
                AccountLogLogic::addHasTenant(
                    $params['tenant_id'],
                    $user->id,
                    $params['changeType'] ?? AccountLogEnum::UM_INC_ADMIN,
                    AccountLogEnum::INC,
                    $params['num'],
                    '',
                    $params['remark'] ?? ''
                );
            } else {
                $user->user_money -= $params['num'];
                $user->save();
                //记录日志
                AccountLogLogic::addHasTenant(
                    $params['tenant_id'],
                    $user->id,
                    $params['changeType'] ?? AccountLogEnum::UM_INC_ADMIN,
                    AccountLogEnum::DEC,
                    $params['num'],
                    '',
                    $params['remark'] ?? ''
                );
            }

            Db::commit();
            return true;

        } catch (\Exception $e) {
            Db::rollback();
            return $e->getMessage();
        }
    }

    /**
     * @note 新增用户
     * @param array $params
     */
    public static function addUser(array $params)
    {
        // 用户头像
        $defaultAvatar = config('project.default_image.user_avatar');
        $avatar = $params['avatar'] ? FileService::setFileUrl($params['avatar']) : ConfigService::get('default_image', 'user_avatar', $defaultAvatar);
        // 用户唯一标识
        $userSn = User::createUserSn();
        $defaultNickname = '用户' . $userSn;
        // 默认密码
        $passwordSalt = Config::get('project.unique_identification');
        $passwordDefault = $params['password'] ?: Config::get('project.default_password');

        $password = create_password($passwordDefault, $passwordSalt);

        return User::create([
            'sn'         => $userSn,
            'nickname'   => $params['nickname'] ?: $defaultNickname,
            'account'    => $params['account'],
            'is_disable' => $params['is_disable'] ?? 0,
            'avatar'     => $avatar,
            'mobile'     => $params['mobile'],
            'password'   => $password,
            'channel'    => 3,
        ]);
    }

}