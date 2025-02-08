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

namespace app\tenantapi\lists\voice;


use app\common\lists\BaseDataLists;
use app\common\model\voice\TenantVoice;
use app\common\lists\ListsSearchInterface;
use app\common\service\FileService;


/**
 * TenantVoice列表
 * Class TenantVoiceLists
 * @package app\tenantapi\listsvoice
 */
class TenantVoiceLists extends BaseDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author yfdong
     * @date 2024/10/09 22:12
     */
    public function setSearch(): array
    {
        return [];
    }

    /**
     * @notes 搜索条件
     * @return array
     * @author JXDN
     * @date 2024/12/10 16:31
     */
    public function queryWhere()
    {
        $where = [];

        if (!empty($this->params['user_info'])) {
            $where[] = ['u.sn|u.nickname|u.mobile|u.account', 'like', '%' . $this->params['user_info'] . '%'];
        }

        if (!empty($this->params['start_time'])) {
            $where[] = ['al.create_time', '>=', strtotime($this->params['start_time'])];
        }

        if (!empty($this->params['end_time'])) {
            $where[] = ['al.create_time', '<=', strtotime($this->params['end_time'])];
        }

        // 根据状态筛选
        if (isset($this->params['status']) && in_array($this->params['status'], ['0', '1', '2'])) {
            $where[] = ['al.status', '=', $this->params['status']];
        }

        return $where;
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author yfdong
     * @date 2024/10/09 22:12
     */
    public function lists(): array
    {
        $voiceList = TenantVoice::alias('al')
            ->join('user u', 'u.id = al.uid')
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->with(['file', 'user'])
            ->field(['u.sn', 'u.nickname', 'u.mobile', 'u.account', 'al.id', 'al.task_id', 'al.tenant_id', 'al.uid', 'al.name', 'al.record', 'al.file_id', 'al.duration', 'al.status','al.expected_content','al.actual_content', 'al.create_time'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['al.id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($voiceList as &$item) {
            if (isset($item['file'])) {
                $item['fileUrl'] = FileService::getFileUrl($item['file']['uri']);
                unset($item['file']);
            }
            if (!empty($item['user'])) {
                $item['userName'] = $item['user']['nickname'];
                $item['userAvatar'] = $item['user']['avatar'];
                unset($item['user']);
            }
        }
        return $voiceList;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author yfdong
     * @date 2024/10/09 22:12
     */
    public function count(): int
    {
        return TenantVoice::alias('al')
            ->join('user u', 'u.id = al.uid')
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->count();
    }


}