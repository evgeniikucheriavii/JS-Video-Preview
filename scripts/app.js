let videos;

Init();

function Init()
{
	videos = document.getElementsByClassName("item__thumb");

	for(var i = 0; i < videos.length; i++)
	{
		//videos[i].volume = 0;
		videos[i].addEventListener("mouseenter", function(e) { MouseEnter(e.target); });
		videos[i].addEventListener("mouseleave", function(e) { MouseLeave(e.target); });
	}

}

function MouseEnter(e)
{
	e.play();
}

function MouseLeave(e)
{
	e.pause();
	e.load();
}