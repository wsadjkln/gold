click(148,148)
关闭()
function 关闭() {
var 关闭 = text("关闭").findOne()
log("出现关闭")
    var 关闭x =关闭.bounds().centerX()
    var 关闭y =关闭.bounds().centerY()
    click(关闭x,关闭x)
    log("点击"+关闭x,关闭x)
    sleep(1000)    
}

function 领取() {
if(id("com.jifen.qukan.content.shell:id/t_").exists()){
    log("找到领取控件")
    var 领取 = id("com.jifen.qukan.content.shell:id/t_").findOne()    
    if(领取.text() == "领取"){        
        var 领取x =领取.bounds().centerX()
        var 领取y =领取.bounds().centerY()
        click(领取x,领取y)
        log("点击"+领取x,领取y)
        sleep(2000)
        click(领取x,领取y)
        log("点击再领取")
    }    
}else{
    log(领取.text())
}
}