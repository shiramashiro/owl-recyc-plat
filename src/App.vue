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
                Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight
                // #endif
                // #ifdef MP-ALIPAY
                Vue.prototype.StatusBar = e.statusBarHeight
                Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight
                // #endif
                // 设备信息
                Vue.prototype.$deviceInfo = e
            }
        })
    }
}
</script>

<style>
@import '@/components/colorui/main.css';
@import '@/components/colorui/icon.css';
@import '@/static/css/main.css';
</style>
