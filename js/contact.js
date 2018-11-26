
// Check input value
function checkValue(el)
{
	if (el.value !== "")
	{
		el.nextElementSibling.classList.add("input-filled");
	}
	else
	{
		el.nextElementSibling.classList.remove("input-filled");
	}
}

function checkFormValues()
{
	if (document.querySelector("input[name='First Name']").value === "" || document.querySelector("input[name='Email']").value === "" || document.querySelector("textarea[name='Project description']").value === "")
	{
		document.querySelector("input[name='First Name']").nextElementSibling.classList.add("input-filled");
		document.querySelector("input[name='Email']").nextElementSibling.classList.add("input-filled");
		document.querySelector("textarea[name='Project description']").nextElementSibling.classList.add("input-filled");
		console.log("obj");
	}
	else
	{
		document.getElementById('contact-form').submit();
	}
}