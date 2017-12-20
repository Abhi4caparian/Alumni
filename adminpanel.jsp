<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zxx">
<head>
<title>FreshersFirst</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="TechEdu Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
 
  
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/zoomslider.css" />

<link rel="stylesheet" href="css/lightbox.css">
<!-- carousel slider -->  
<link href="css/owl.carousel.css" rel="stylesheet" type="text/css" media="all"> 
<!-- //carousel slider -->
<link href="css/font-awesome.css" rel="stylesheet"> 
<script type="text/javascript" src="js/modernizr-2.6.2.min.js"></script>
<script src="js/jquery-2.2.3.min.js"></script>
<script src="js/bootstrap.js"></script>
<!--/web-fonts-->
<link href="//fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i" rel="stylesheet">
<link href="//fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">
<!--//web-fonts-->

<!-- new -->
    
    <!-- font icon -->
    <link href="css/elegant-icons-style.css" rel="stylesheet" />
    <link href="css/font-awesome.css" rel="stylesheet" />
    <!-- Custom styles -->
    <link href="css/style1.css" rel="stylesheet">
    <link href="css/style-responsive.css1" rel="stylesheet" />
   <script type="text/javascript" src="js/country_state.js"></script>

</head>
<body>
	<!--/banner-bottom-->
			  <div class="w3_agilits_banner_bootm">
			     <div class="w3_agilits_inner_bottom">
			            <div class="wthree_agile_login">
						     <ul>
								<li><i class="fa fa-phone" aria-hidden="true"></i> (+000) 009 455 4088</li>
								<li><i class="fa fa-envelope-o list-icon" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
							</ul>
						</div>
						 
				</div>
			</div>
			<!--//banner-bottom-->
  <!--/banner-section-->
	<div id="demo-1" data-zs-src='["images/b1.jpg","images/6.jpg","images/b2.jpg","images/b3.jpg","images/b4.jpg"]' data-zs-overlay="dots">
		<div class="demo-inner-content">
		<!--/header-w3l-->
			   <div class="header-w3-agileits" id="home">
			     <div class="inner-header-agile">	
				<nav class="navbar navbar-default">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<h1><a  href="index.html"><span class="letter">F</span>reshers <span class="letter">F</span>irst</a></h1>
					</div>
					<!-- navbar-header -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li class="active"><a href="index.html">Home</a></li>
								<li><a href="#about" class="scroll">About</a></li>
								<li><a href="#agileits-services" class="scroll">Services</a></li>
								<li><a href="#portfolio" class="scroll">gallery</a></li>
								<li><a href="#team" class="scroll">Team</a></li>
								<li><a href="#testimonials" class="scroll" >Testimonials</a></li>
								<li><a href="#contact" class="scroll">contact</a></li>
							</ul>
						</div>
					<div class="clearfix"> </div>	
				</nav>
			</div> 

			   </div>
		<!--//header-w3l-->
			<!--/banner-info-->
			   <div class="baner-info">
			       <!--  <h4>The best learning institution</h4>
				   <h3><span>w</span>elcome to our <span>u</span>niversity</h3>
				  <p>Itaque earum rerum hic tenetur a sapiente delectus </p>-->
 <div class="container">

      <form class="login-form" action="EduInfoServlet" method="post" name="register" onsubmit="return formValidation()">        
		<div class="input-group">	          
			<span class="input-group-addon"><i class="fa fa-globe"></i></span>
			<select class="form-control m-bot15" name="ccountry" id="country" required="required" ></select>
								</div>			
		<div class="input-group">	          
			<span class="input-group-addon"><i class="fa fa-globe"></i></span>
			<select class="form-control m-bot15" name="cstate" id="state" required="required"  ></select>
		</div>

            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input type="text" class="form-control" name="branch" placeholder="Branch" required="required"  >
            </div>
               
             <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input type="text" class="form-control" name="course" placeholder="Course" required="required"  >
            </div>
            
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                <input type="text" class="form-control" name="cgpa" placeholder="CGPA" required="required"  >
            </div>   
           
            <input type="submit" class="btn btn-info btn-lg btn-block" value="Search"/>
            <input type="reset" class="btn btn-info btn-lg btn-block" value="Reset"/>
           
        </div>
      </form>
	   <script type="text/javascript">
populateCountries("country", "state");

</script> 
    </div>
   				 
			   </div>
			<!--/banner-ingo-->		
		</div> 
    </div>
  <!--/banner-section-->

  <!--//main-header-->
	<script type="text/javascript" src="js/jquery.zoomslider.min.js"></script>
	<!-- testimonial -->
	
		
	
	
	<!-- bootstrap-modal-pop-up -->
	<div class="modal video-modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
				  Tech Edu
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
				</div>
					<div class="modal-body">
						<img src="images/6.jpg" alt=" " class="img-responsive" />
						<p>Ut enim ad minima veniam, quis nostrum 
							exercitationem ullam corporis suscipit laboriosam, 
							nisi ut aliquid ex ea commodi consequatur? Quis autem 
							vel eum iure reprehenderit qui in ea voluptate velit 
							esse quam nihil molestiae consequatur, vel illum qui 
							dolorem eum fugiat quo voluptas nulla pariatur.
							<i>" Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
								esse quam nihil molestiae consequatur.</i></p>
					</div>
			</div>
		</div>
	</div>
<!-- //bootstrap-modal-pop-up --> 
<!--script for portfolio-->
	<script src="js/lightbox-plus-jquery.min.js"> </script>
	<script src="js/easyResponsiveTabs.js" type="text/javascript"></script>
	<script type="text/javascript">
		$(document).ready(function () {
			$('#horizontalTab').easyResponsiveTabs({
				type: 'default', //Types: default, vertical, accordion           
				width: 'auto', //auto or any width like 600px
				fit: true   // 100% fit in a container
			});
		});		
	</script>
	<!--//script for portfolio-->


<script src="js/owl.carousel.js"></script>  
	<script>
		$(document).ready(function() { 
			$("#owl-demo").owlCarousel({
			  autoPlay: true, //Set AutoPlay to 3 seconds
			  items :3,
			  itemsDesktop : [640,2],
			  itemsDesktopSmall : [414,1],
			  navigation : true,
			  // THIS IS THE NEW PART
				afterAction: function(el){
					//remove class active
					this
					.$owlItems
					.removeClass('active')
					//add class active
					this
					.$owlItems //owl internal $ object containing items
					.eq(this.currentItem + 1)
					.addClass('active')
					}
			// END NEW PART
		 
			});
			
		}); 
	</script>
	
<!-- here starts scrolling icon -->
		<script type="text/javascript">
			$(document).ready(function() {
				/*
					var defaults = {
					containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
					};
				*/
										
				$().UItoTop({ easingType: 'easeOutQuart' });
									
				});
		</script>
		<!-- flexSlider -->
					<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" property="" />
					<script defer src="js/jquery.flexslider.js"></script>
					<script type="text/javascript">
					$(window).load(function(){
					  $('.flexslider').flexslider({
						animation: "slide",
						start: function(slider){
						  $('body').removeClass('loading');
						}
					  });
					});
				  </script>
		<!-- //flexSlider -->

		<!-- start-smoth-scrolling -->
		<script type="text/javascript" src="js/move-top.js"></script>
		<script type="text/javascript" src="js/easing.js"></script>
		<script type="text/javascript">
			jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				});
			});
		</script>
		<!-- /ends-smoth-scrolling -->
	<!-- //here ends scrolling icon -->
	
<script type="text/javascript" src="js/numscroller-1.0.js"></script>
	
<script src="js/SmoothScroll.min.js"></script>
<jsp:include page="footer.jsp"></jsp:include>
  </body>
 </html> 