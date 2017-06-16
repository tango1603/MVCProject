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
        // создаем контекст данных
        AddressContext db = new AddressContext();

        public ActionResult Index(int page = 1)
        {
            // получаем из бд все объекты Book
            IEnumerable<Address> addreses = db.Addreses;
            // передаем все объекты в динамическое свойство Books в ViewBag
            ViewBag.Addreses = addreses;

            int pageSize = 100; // количество объектов на страницу

            //пагинация
            IEnumerable<Address> addressPerPages = addreses.Skip((page - 1) * pageSize).Take(pageSize);
            PageAddress pageAddress = new PageAddress { PageNumber = page, PageSize = pageSize, TotalItems = addreses.Count() };
            IndexViewModel ivm = new IndexViewModel { PageAddress = pageAddress, Addreses = addressPerPages };

            // возвращаем представление
            return View(ivm);
        }
    }
}