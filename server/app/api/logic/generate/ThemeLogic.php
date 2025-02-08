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

namespace app\api\logic\generate;

use app\common\logic\BaseLogic;
use app\common\model\generate\TenantGenerateTheme;


/**
 * ai文案主题
 * Class ThemeLogic
 * @package app\api\logic
 */
class ThemeLogic extends BaseLogic
{
    /**
     * @notes 根据id获取对应主题信息
     * @param $id
     * @return array
     * @author yfdong
     * @date 2025/01/17 22:35
     */
    public function findById($id): array
    {
        return TenantGenerateTheme::query()->where("id",$id)->findOrEmpty()->toArray();
    }
}