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

declare (strict_types=1);

namespace app\tenantapi\controller;

use app\common\controller\BaseLikeAdminController;
use app\common\enum\AdminTerminalEnum;

/**
 * 管理元控制器基类
 * Class BaseAdminController
 * @package app\tenantapi\controller
 */
class BaseAdminController extends AiAdminController
{
    protected int $adminId = 0;
    protected int $tenantId = 0;

    public function initialize()
    {
        parent::initialize();
        $this->request->source = AdminTerminalEnum::TENANT;
        if (isset($this->request->adminInfo) && $this->request->adminInfo) {
            $this->adminInfo = $this->request->adminInfo;
            $this->tenantId = $this->request->adminInfo['tenant_id'];
            $this->adminId = $this->request->adminInfo['admin_id'];
        }
        $this->AiInit();
    }

}