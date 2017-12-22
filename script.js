function formValidation(){
	
	var fname=document.register.fname;
	var lname=document.register.lname;
	var contact=document.register.con;

	var emailid=document.register.email;
	var pass=document.register.pass;
	var pass1=document.register.pass1;
	if(fname_validation(fname))
		{
		if(lname_validation(lname))
			{
				if(contact_validation(contact))
					{
						if(emailid_validation(emailid))
							{
							if(pass_validation(pass,7,12))
								{
								if(pass1_validation(pass1,7,12))
									{
									return true;
									}
								}
							}
						}
					}
		}
	return false;
}
function fname_validation(fname)
{
var letter=/^[A-Za-z]+$/;
if(fname.value.match(letter))
	{
	return true;
	}
else
	{
	alert("First Name must be alphabetic");
	fname.focus();
	return false;
	}
}
function lname_validation(lname)
{
var letter=/^[A-Za-z]+$/;
if(lname.value.match(letter))
	{
	return true;
	}
else
	{
	alert("Last Name must be alphabetic");
	lname.focus();
	return false;
	}
}
function contact_validation(contact)
{
	var phoneno = /^\d{10}$/;
	if(contact.value.match(phoneno))
	{
	return true;
	}
else
	{
	alert("Please enter valid phone no");
contact.focus();
return false;
	}
	  }
function address_validation(address)
{
	var letter=/^[A-Za-z0-9_\.\ \-\&]+$/;
	if(address.value.match(letter))
		{
		return true;
		}
	else
		{
		alert("Please enter valid address");
	address.focus();
	return false;
		}
}
function gen_validation(gen)
{
if(gen.value=="default")
	{
	alert("please enter gender from list");	
	gen.focus();
	return false;
	}
else
	{
	return true;
	}
}
function emailid_validation(emailid)
{
var letter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(emailid.value.match(letter))
	{
	return true;
	}
else
	{
alert("Please enter valid emailid");
emailid.focus();
return false;
}
}
function pass_validation(pass,my,mx)
{
var pass_len=pass.value.length;
if(pass_len>=7 && pass_len<=12)
	{
	return true;
	}
else
	{
	alert("password length must be "+my+" to "+mx);
	pass.focus();
	return false;
	}

}
function pass1_validation(pass1,my,mx)
{
var pass_len=pass1.value.length;
if(pass_len>=7 && pass_len<=12)
	{
	return true;
	}
else
	{
	alert("New password length must be "+my+" to "+mx);
	pass1.focus();
	return false;
	}

}

function loginvalidate(){
	var emailid=document.login.email;
	var pass=documnet.login.pass;
	if(email_validation(emailid))
	{
	if(pass_validation(pass,7,12))
		{
		return true;
		}
	return false;
		}
}

function email_val(emailid)
{
	var letter = /^[A-Za-z0-9_\.]+\@[A-Za-z0-9_\.]+\.([A-Za-z0-9]{2,})+$/;
	if(email.value.match(letter))
		{
		return true;
		}
	else
		{
		alert("Please enter valid Email");
		email.focus();
		return false;
		}
}


