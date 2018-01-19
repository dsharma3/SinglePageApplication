using SPA.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPA.Server.Controllers
{
    public class ContactController : ApiController
    {
        [Route("contactus")]
        [HttpPost]
        public void SaveContactUsAction(ContactUsModel contactUs)
        {

        }
    }
}
