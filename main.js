var library=[
	{
		author:"bill gates",
		title:"The road ahead",
		readingstatus:true
	},
	{
		author:"steve jobs",
		title:"walter iseecson",
		readingstatus:true
	},
	{
		author:"suzanne collins",
		title:"the final book of the hunger games",
		readingstatus:false
	}
	];
	 library.forEach(function(e){
	
	 
	 if(e.readingStatus===true)
	 {
		 console.log(` this book is already read ${e.title} ${e.author}`);
	 }
	 else{
		 console.log("this book not read");
	 }
	 });
	