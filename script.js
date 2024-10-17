
document.getElementById("Load_Button").onclick = function() {
	console.log("Button Pressed")
	document.getElementById("Main_Video").play()
	document.getElementById("Load_Button").remove()
	document.getElementById("vid_hider").remove()
}