using MVCProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getData()
        {
            using (AddressContext dc = new AddressContext())
            {
                return Json(dc.Addreses.ToList());
            }
        }
    }
}