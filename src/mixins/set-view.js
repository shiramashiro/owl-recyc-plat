export const setView = {
    data() {
        return {
            tipColor: '#19BE6B',
            commentType: ''
        }
    },
    methods: {
        expressView(info) {
            console.log('ss')
            let clickedType = '点赞'
            if (info.type === 'disagree') clickedType = '反对'
            this.$axios
                .post('/set/view', {
                    type: this.commentType,
                    id: info.item.id,
                    viewType: info.type
                })
                .then(resp => {
                    if (resp.status === 200) {
                        this.showToast(clickedType + '成功~')
                        this.tipColor = '#19BE6B'
                    } else {
                        this.showToast(clickedType + '失败！')
                        this.tipColor = '#EB0909'
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.showToast('服务器错误！')
                    this.tipColor = '#EB0909'
                })
        },
        showToast(msg) {
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        }
    }
}
