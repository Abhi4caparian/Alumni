function formValidation(){
	
	var cname=document.register.cname;
	var apass=document.register.apass;
	var epass=document.register.epass;
	var cgpa=document.register.cgpa;
	
	
	if(cname_validation(cname))
	{
		if(apass_validation(apass))
		{
			if(epass_validation(epass))
			{
				if(cgpa_validation(cgpa))
				{
					return true;
				}
			}
		}
	}
}

function cname_validation(cname)
{
var letter=/^[A-Za-z]+$/;
if(cname.value.match(letter))
	{
	return true;
	}
else
	{
	alert("College Name must be alphabetic");
	cname.focus();
	return false;
	}
}	


function apass_validation(apass)
{
	var text = /^[0-9]+$/;
    if (apass != 0) {
        if ((apass != "") && (!text.test(apass))) 
        {

            alert("Please Enter Numeric Values Only");
            return false;
        }

        if (apass.length != 4) {
            alert("Year is not proper. Please check");
            return false;
        }
        var current_year=new Date().getFullYear();
        if((apass < 1920) || (apass > current_year))
            {
            alert("Year should be in range 1920 to current year");
            return false;
            }
        return true;	
}
}


function epass_validation(epass)
{
	var text = /^[0-9]+$/;
    if (epass != 0) {
        if ((epass != "") && (!text.test(epass))) 
        {

            alert("Please Enter Numeric Values Only");
            return false;
        }

        if (epass.length != 4) {
            alert("Year is not proper. Please check");
            return false;
        }
        var current_year=new Date().getFullYear();
        if((apass < 1920) || (epass > current_year))
            {
            alert("Year should be in range 1920 to current year");
            return false;
            }
        return true;	
}
}


function cgpa_validation(cgpa)
{
	var reg = /[0-9][.][0-9]/;
    if(!reg.test(cgpa))
    {
        return false;
    }
    else
    {
        return true;
        alert("correct value");

    }	
}