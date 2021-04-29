<script>
import Vue from 'vue'

export default {
    onLaunch: function() {
        uni.getSystemInfo({
            success: function(e) {
                // #ifndef MP
                Vue.prototype.StatusBar = e.statusBarHeight
                if (e.platform == 'android') {
                    Vue.prototype.CustomBar = e.statusBarHeight + 50
                } else {
                    Vue.prototype.CustomBar = e.statusBarHeight + 45
                }
                // #endif
                // #ifdef MP-WEIXIN
                Vue.prototype.StatusBar = e.statusBarHeight
                let custom = wx.getMenuButtonBoundingClientRect()
                Vue.prototype.Custom = custom
                Vue.prototype.CustomBar =
                    custom.bottom + custom.top - e.statusBarHeight
                // #endif
                // #ifdef MP-ALIPAY
                Vue.prototype.StatusBar = e.statusBarHeight
                Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight
                // #endif

                // 应用启动时将设备信息添加到Vue原形中
                Vue.prototype.$systemInfo = e
                console.log(e)
            }
        })
    }
}
</script>

<style>
/*每个页面公共css */
@import 'colorui/main.css';
@import '@/components/u-parse/u-parse.css';
@import 'colorui/icon.css';

body {
    background-color: white;
}
</style>
