using MVCProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCProject.Controllers
{
    public class DataController : Controller
    {
        public JsonResult GetAddressList()
        {
             List<Address> address = new List<Address>();
              using (AddressContext ac = new AddressContext())
            {
                address = ac.Addreses.ToList();
            }
            return new JsonResult { Data = address, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}