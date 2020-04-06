Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        
        wx.switchTab({//跳转
            url: "../posts/post"
        });
        
    }
})