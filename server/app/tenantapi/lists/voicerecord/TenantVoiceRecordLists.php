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

namespace app\tenantapi\lists\voicerecord;


use app\common\lists\BaseDataLists;
use app\common\model\file\TenantFile;
use app\common\service\FileService;
use app\common\model\voicerecord\TenantVoiceRecord;
use app\common\lists\ListsSearchInterface;


/**
 * TenantVoiceRecord列表
 * Class TenantVoiceRecordLists
 * @package app\tenantapi\listsvoicerecord
 */
class TenantVoiceRecordLists extends BaseDataLists implements ListsSearchInterface
{


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
     * @date 2024/10/09 22:15
     */
    public function lists(): array
    {
        $records = TenantVoiceRecord::alias('al')
            ->join('user u', 'u.id = al.uid')
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->with(['file', 'user', 'voice'])
            ->field(['u.sn', 'u.nickname', 'u.mobile', 'u.account', 'al.id', 'al.tenant_id', 'al.uid', 'al.task_id', 'al.title', 'al.voice_id', 'al.content', 'al.cost_power', 'al.status', 'al.timbre_name', 'al.completion_time', 'al.cost_time', 'al.file_id', 'al.duration', 'al.size', 'al.remark', 'al.cover', 'al.create_time'])
            ->order(['al.id' => 'desc'])
            ->limit($this->limitOffset, $this->limitLength)
            ->select()
            ->toArray();
        // 处理 file 不为空的记录
        foreach ($records as &$item) {
            if (!empty($item['voice'])) {
                $file = (new TenantFile())->find($item['voice']['file_id']);
                if (!empty($file)) {
                    $item['voice']['voice_url'] = FileService::getFileUrl($file['uri']);
                } else {
                    $item['voice']['voice_url'] = '';
                }
            } else {
                $timbre = config('timbre.system_timbre');
                $timbre_name = $item['timbre_name'];
                $result = array_filter($timbre, function ($item) use ($timbre_name) {
                    return isset($item['voice_name']) && $item['voice_name'] == $timbre_name;
                });

                $matched = !empty($result) ? array_values($result)[0] : null;
                if ($matched) {
                    $uri = "/resource/timbre/" . $timbre_name . ".mp3";

                    $item['voice'] = [
                        'name'      => $matched['name'],
                        'voice_url' => FileService::getFileUrl($uri)
                    ];
                }
            }

            if (!empty($item['file'])) {
                // 处理 file 字段
                $item['resultFile'] = FileService::getFileUrl($item['file']['uri']);
                unset($item['file']);
            }

            if (!empty($item['user'])) {
                // 处理 file 字段
                $item['userName'] = $item['user']['nickname'];
                $item['userAvatar'] = $item['user']['avatar'];
                unset($item['user']);
            }
        }
        return $records;
    }

    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/10/09 22:23
     */
    public function count(): int
    {
        return TenantVoiceRecord::alias('al')
            ->join('user u', 'u.id = al.uid')
            ->where($this->searchWhere)
            ->where($this->queryWhere())
            ->count();
    }
}