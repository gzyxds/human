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

namespace app\tenantapi\logic;

use app\tenantapi\logic\article\ArticleCateLogic;
use app\tenantapi\logic\auth\MenuLogic;
use app\tenantapi\logic\auth\RoleLogic;
use app\tenantapi\logic\dept\DeptLogic;
use app\tenantapi\logic\dept\JobsLogic;
use app\tenantapi\logic\setting\dict\DictTypeLogic;
use app\common\enum\YesNoEnum;
use app\common\model\article\ArticleCate;
use app\common\model\auth\SystemMenu;
use app\common\model\auth\SystemRole;
use app\common\model\dept\Dept;
use app\common\model\dept\Jobs;
use app\common\model\dict\DictData;
use app\common\model\dict\DictType;
use app\common\service\ConfigService;
use app\common\service\{FileService};

/**
 * 配置类逻辑层
 * Class ConfigLogic
 * @package app\tenantapi\logic
 */
class ConfigLogic
{
    /**
     * @notes 获取配置
     * @return array
     * @author 段誉
     * @date 2021/12/31 11:03
     */
    public static function getConfig(): array
    {
        $config = [
            // 版本号
            'version'    => config('project.version'),
            // 文件域名
            'oss_domain' => FileService::getFileUrl(),

            // 网站名称
            'web_name' => ConfigService::get('tenant', 'name'),
            // 网站图标
            'web_favicon' => FileService::getFileUrl(ConfigService::get('tenant', 'web_favicon')),
            // 网站logo
            'web_logo' => FileService::getFileUrl(ConfigService::get('tenant', 'web_logo')),
            // 登录页
            'login_image' => FileService::getFileUrl(ConfigService::get('tenant', 'login_image')),

            // 版权信息
            'copyright_config' => ConfigService::get('copyright', 'config', []),
        ];
        return $config;
    }


    /**
     * @notes 根据类型获取字典类型
     * @param $type
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2022/9/27 19:09
     */
    public static function getDictByType($type)
    {
        if (!is_string($type)) {
            return [];
        }
        
        $type = explode(',', $type);
        $lists = DictData::whereIn('type_value', $type)->select()->toArray();

        if (empty($lists)) {
            return [];
        }

        $result = [];
        foreach ($type as $item) {
            foreach ($lists as $dict) {
                if ($dict['type_value'] == $item) {
                    $result[$item][] = $dict;
                }
            }
        }
        return $result;
    }



}