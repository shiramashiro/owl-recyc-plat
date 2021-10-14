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
                // 设备信息
                Vue.prototype.$systemInfo = e
            }
        })
    }
}
</script>

<style>
@import '@/colorui/main.css';
@import '@/colorui/icon.css';
@import '@/components/u-parse/u-parse.css';

body {
    background-color: white;
}
</style>
