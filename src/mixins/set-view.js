export const setViewMixins = {
    data() {
        return {
            tipColor: '#19BE6B',
            commentType: ''
        }
    },
    methods: {
        expressView(info) {
            let clickedType = '点赞'
            if (info.type === 'disagree') clickedType = '反对'
            this.$axios
                .post('/set/view', {
                    id: info.item.id,
                    viewType: info.type,
                    type: this.commentType
                })
                .then(resp => {
                    if (resp.status !== 200) {
                        this.showToast(clickedType + '失败！', '#EB0909')
                        return
                    }
                    this.showToast(clickedType + '成功~', '#19BE6B')
                })
                .catch(error => {
                    console.log(error)
                    this.showToast('服务器错误！', '#EB0909')
                })
        },
        showToast(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        }
    }
}
