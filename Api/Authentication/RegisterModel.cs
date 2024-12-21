using System.ComponentModel.DataAnnotations;

namespace Api.Authentication;

public class RegisterModel
{
    [Required(ErrorMessage = "Username is required")]
    public string Username { get;set;}

    [EmailAddress]
    [Required(ErrorMessage ="Email is required")]
    public string Email { get;set;}

    [Required(ErrorMessage ="Password is required")]
    public string Password { get;set;}

 
    public string PhoneNumber { get;set;}
}