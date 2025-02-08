"use strict";const e=require("../../../../common/vendor.js"),o=e=>{e.wxsCallMethods||(e.wxsCallMethods=[]),e.wxsCallMethods.push("_handleListTouchstart","_handleRefresherTouchstart","_handleTouchDirectionChange","_handleScrollViewBounce","_handleWxsPullingDown","_handleRefresherTouchmove","_handleRefresherTouchend","_handlePropUpdate","_handleWxsPullingDownStatusChange")},r={};if(!Array){(e.resolveComponent("z-paging-refresh")+e.resolveComponent("z-paging-load-more")+e.resolveComponent("z-paging-empty-view"))()}Math,o(e._sfc_main),"function"==typeof r&&r(e._sfc_main);const a=e._export_sfc(e._sfc_main,[["render",function(o,r,a,t,l,s){return e.e({a:-1===o.cssSafeAreaInsetBottom},(o.cssSafeAreaInsetBottom,{}),{b:o.showF2&&o.showRefresherF2},o.showF2&&o.showRefresherF2?{c:e.o((()=>{})),d:e.s({transform:o.f2Transform,transition:"transform .2s linear",height:o.superContentHeight+"px","z-index":o.f2ZIndex})}:{},{e:!o.usePageScroll&&o.zSlots.top},!o.usePageScroll&&o.zSlots.top?{}:o.usePageScroll&&o.zSlots.top?{g:e.o((()=>{})),h:e.s({top:`${o.windowTop}px`,"z-index":o.topZIndex})}:{},{f:o.usePageScroll&&o.zSlots.top,i:o.zSlots.left},o.zSlots.left?{j:o.finalIsOldWebView?1:""}:{},{k:o.finalRefresherFixedBacHeight>0},o.finalRefresherFixedBacHeight>0?{l:e.s({background:o.refresherFixedBackground,height:`${o.finalRefresherFixedBacHeight}px`})}:{},{m:o.showRefresher},o.showRefresher?e.e({n:o.useRefresherStatusBarPlaceholder},o.useRefresherStatusBarPlaceholder?{o:e.s({height:`${o.statusBarHeight}px`})}:{},{p:!(o.zSlots.refresherComplete&&o.refresherStatus===o.R.Complete||o.zSlots.refresherF2&&o.refresherStatus===o.R.GoF2)},o.zSlots.refresherComplete&&o.refresherStatus===o.R.Complete||o.zSlots.refresherF2&&o.refresherStatus===o.R.GoF2?{}:{q:e.r("refresher",{refresherStatus:o.refresherStatus})},{r:o.zSlots.refresherComplete&&o.refresherStatus===o.R.Complete},o.zSlots.refresherComplete&&o.refresherStatus===o.R.Complete||o.zSlots.refresherF2&&o.refresherStatus===o.R.GoF2||o.showCustomRefresher?{}:{v:e.sr("refresh","662af626-0"),w:e.s({height:o.finalRefresherThreshold-o.finalRefresherThresholdPlaceholder+"px"}),x:e.p({status:o.refresherStatus,defaultThemeStyle:o.finalRefresherThemeStyle,defaultText:o.finalRefresherDefaultText,pullingText:o.finalRefresherPullingText,refreshingText:o.finalRefresherRefreshingText,completeText:o.finalRefresherCompleteText,goF2Text:o.finalRefresherGoF2Text,defaultImg:o.refresherDefaultImg,pullingImg:o.refresherPullingImg,refreshingImg:o.refresherRefreshingImg,completeImg:o.refresherCompleteImg,refreshingAnimated:o.refresherRefreshingAnimated,showUpdateTime:o.showRefresherUpdateTime,updateTimeKey:o.refresherUpdateTimeKey,updateTimeTextMap:o.finalRefresherUpdateTimeTextMap,imgStyle:o.refresherImgStyle,titleStyle:o.refresherTitleStyle,updateTimeStyle:o.refresherUpdateTimeStyle,unit:o.unit})},{s:o.zSlots.refresherF2&&o.refresherStatus===o.R.GoF2,t:!o.showCustomRefresher,y:e.s({height:`${o.finalRefresherThreshold}px`,background:o.refresherBackground}),z:e.s({"margin-top":`-${o.finalRefresherThreshold+o.refresherThresholdUpdateTag}px`,background:o.refresherBackground,opacity:o.isTouchmoving?1:0})}):{},{A:o.showLoading&&o.zSlots.loading&&!o.loadingFullFixed},(o.showLoading&&o.zSlots.loading&&o.loadingFullFixed,{}),{B:o.useVirtualList},o.useVirtualList?{C:e.s({height:o.virtualPlaceholderTopHeight+"px"})}:{},{D:o.finalUseInnerList},o.finalUseInnerList?e.e({E:o.finalUseVirtualList},o.finalUseVirtualList?{F:e.f(o.virtualList,((r,a,t)=>e.e(o.useCompatibilityMode?{}:{a:"cell-"+t,b:e.r("cell",{item:r,index:o.virtualTopRangeIndex+a},t)},{c:`${o.fianlVirtualCellIdPrefix}-${r[o.virtualCellIndexKey]}`,d:r.zp_unique_index,e:e.o((e=>o._innerCellClick(r,o.virtualTopRangeIndex+a)),r.zp_unique_index)}))),G:o.useCompatibilityMode,H:e.s(o.innerCellStyle)}:{I:e.f(o.realTotalData,((r,a,t)=>({a:"cell-"+t,b:e.r("cell",{item:r,index:a},t),c:a,d:e.o((e=>o._innerCellClick(r,a)),a)})))},{J:e.s(o.innerListStyle)}):{},{K:o.useChatRecordMode&&o.realTotalData.length>=o.defaultPageSize&&(o.loadingStatus!==o.M.NoMore||o.zSlots.chatNoMore)&&(o.realTotalData.length||o.showChatLoadingWhenReload&&o.showLoading)&&!o.isFirstPageAndNoMore},o.useChatRecordMode&&o.realTotalData.length>=o.defaultPageSize&&(o.loadingStatus!==o.M.NoMore||o.zSlots.chatNoMore)&&(o.realTotalData.length||o.showChatLoadingWhenReload&&o.showLoading)&&!o.isFirstPageAndNoMore?e.e({L:o.loadingStatus===o.M.NoMore&&o.zSlots.chatNoMore},o.loadingStatus===o.M.NoMore&&o.zSlots.chatNoMore?{}:e.e({M:o.zSlots.chatLoading},o.zSlots.chatLoading?{N:e.r("chatLoading",{loadingMoreStatus:o.loadingStatus})}:{O:e.o((e=>o._onLoadingMore("click"))),P:e.p({zConfig:o.zLoadMoreConfig})}),{Q:e.s(o.chatRecordRotateStyle)}):{},{R:o.useVirtualList},o.useVirtualList?{S:e.s({height:o.virtualPlaceholderBottomHeight+"px"})}:{},{T:o.showLoadingMoreDefault},o.showLoadingMoreDefault||o.showLoadingMoreLoading||o.showLoadingMoreNoMore||o.showLoadingMoreFail?{}:o.showLoadingMoreCustom?{Y:e.o((e=>o._onLoadingMore("click"))),Z:e.p({zConfig:o.zLoadMoreConfig})}:{},{U:o.showLoadingMoreLoading,V:o.showLoadingMoreNoMore,W:o.showLoadingMoreFail,X:o.showLoadingMoreCustom,aa:o.safeAreaInsetBottom&&o.useSafeAreaPlaceholder&&!o.useChatRecordMode},o.safeAreaInsetBottom&&o.useSafeAreaPlaceholder&&!o.useChatRecordMode?{ab:e.s({height:o.safeAreaBottom+"px"})}:{},{ac:e.s(o.finalPlaceholderTopHeightStyle),ad:e.s(o.finalPagingContentStyle),ae:o.showEmpty},o.showEmpty?e.e({af:o.zSlots.empty},o.zSlots.empty?{ag:e.r("empty",{isLoadFailed:o.isLoadFailed})}:{ah:e.o(o._emptyViewReload),ai:e.o(o._emptyViewClick),aj:e.p({emptyViewImg:o.finalEmptyViewImg,emptyViewText:o.finalEmptyViewText,showEmptyViewReload:o.finalShowEmptyViewReload,emptyViewReloadText:o.finalEmptyViewReloadText,isLoadFailed:o.isLoadFailed,emptyViewStyle:o.emptyViewStyle,emptyViewTitleStyle:o.emptyViewTitleStyle,emptyViewImgStyle:o.emptyViewImgStyle,emptyViewReloadStyle:o.emptyViewReloadStyle,emptyViewZIndex:o.emptyViewZIndex,emptyViewFixed:o.emptyViewFixed,unit:o.unit})},{ak:o.emptyViewCenter?1:"",al:e.s(o.emptyViewSuperStyle),am:e.s(o.chatRecordRotateStyle)}):{},{an:e.s({justifyContent:o.useChatRecordMode?"flex-end":"flex-start"}),ao:e.s(o.scrollViewInStyle),ap:e.s({transform:o.finalRefresherTransform,transition:o.refresherTransition}),aq:o.wxsPropType,ar:o.finalRefresherThreshold,as:o.refresherF2Enabled,at:o.finalRefresherF2Threshold,av:o.isIos,aw:o.loading||o.isRefresherInComplete,ax:o.useChatRecordMode,ay:o.refresherEnabled,az:o.useCustomRefresher,aA:o.wxsPageScrollTop,aB:o.wxsScrollTop,aC:o.refresherMaxAngle,aD:o.refresherNoTransform,aE:o.refresherAngleEnableChangeContinued,aF:o.usePageScroll,aG:o.watchTouchDirectionChange,aH:o.isTouchmoving,aI:o.finalRefresherOutRate,aJ:o.finalRefresherPullRate,aK:o.hasTouchmove,aL:o.usePageScroll?"":1,aM:o.showScrollbar?"":1,aN:e.s(o.chatRecordRotateStyle),aO:o.scrollTop,aP:o.scrollX,aQ:o.finalScrollable,aR:o.finalEnableBackToTop,aS:o.showScrollbar,aT:o.finalScrollWithAnimation,aU:o.scrollIntoView,aV:o.finalLowerThreshold,aW:o.finalRefresherEnabled&&!o.useCustomRefresher,aX:o.finalRefresherThreshold,aY:o.finalRefresherDefaultStyle,aZ:o.refresherBackground,ba:o.finalRefresherTriggered,bb:e.o(((...e)=>o._scroll&&o._scroll(...e))),bc:e.o(((...e)=>o._onScrollToLower&&o._onScrollToLower(...e))),bd:e.o(((...e)=>o._onScrollToUpper&&o._onScrollToUpper(...e))),be:e.o(((...e)=>o._onRestore&&o._onRestore(...e))),bf:e.o((e=>o._onRefresh(!0))),bg:o.finalIsOldWebView?1:"",bh:e.s(o.scrollViewContainerStyle),bi:o.zSlots.right},o.zSlots.right?{bj:o.finalIsOldWebView?1:""}:{},{bk:o.usePageScroll?"":1,bl:e.s(o.finalScrollViewStyle),bm:!o.usePageScroll&&o.zSlots.bottom},!o.usePageScroll&&o.zSlots.bottom?{}:o.usePageScroll&&o.zSlots.bottom?{bo:e.o((()=>{})),bp:e.s({bottom:`${o.windowBottom}px`})}:{},{bn:o.usePageScroll&&o.zSlots.bottom,bq:o.useChatRecordMode&&o.autoAdjustPositionWhenChat},o.useChatRecordMode&&o.autoAdjustPositionWhenChat?{br:e.s({height:o.chatRecordModeSafeAreaBottom+"px"}),bs:e.s({height:o.keyboardHeight+"px"})}:{},{bt:o.bottomBgColor,bv:o.showBackToTopClass},o.showBackToTopClass?e.e({bw:o.zSlots.backToTop},o.zSlots.backToTop?{}:{bx:o.useChatRecordMode&&!o.backToTopImg.length?1:"",by:o.backToTopImg.length?o.backToTopImg:o.base64BackToTop},{bz:e.n(o.finalBackToTopClass),bA:e.s(o.finalBackToTopStyle),bB:e.o(((...e)=>o._backToTopClick&&o._backToTopClick(...e)))}):{},{bC:o.showLoading&&o.zSlots.loading&&o.loadingFullFixed},(o.showLoading&&o.zSlots.loading&&o.loadingFullFixed,{}),{bD:o.usePageScroll?"":1,bE:!o.usePageScroll&&o.fixed?1:"",bF:o.usePageScroll?1:"",bG:o.renderPropScrollTop<1?1:"",bH:o.useChatRecordMode?1:"",bI:e.s(o.finalPagingStyle)})}],["__scopeId","data-v-662af626"]]);wx.createComponent(a);
