$(document).on("scroll", function()
{

            if ($(document).scrollTop() > 80)
            {
                $(".navbar").addClass("shrink");
                $("#logo").removeClass("resetlogo");
                $("#logo").addClass("shrinklogo");
            
                

            } 
            else
             {
                $(".navbar").removeClass("shrink");
                $("#logo").removeClass("shrinklogo");
                $("#logo").addClass("resetlogo");
            }

      }
      );