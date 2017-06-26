using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MVCProject.Models
{
    public class AddressDbInitializer : DropCreateDatabaseAlways<AddressContext>
    {
        RandomNotRepeat rndCityStreet = new RandomNotRepeat(0, 20);
        RandomNotRepeat rndCountry = new RandomNotRepeat(0, 4);
        Random rndIndex = new Random(DateTime.Now.Millisecond);


        protected string GetRandomDate()
        {
            string s = DateTime.Now.ToString("dd MMMM yyyy, HH:mm:ss");
            return s;
        }

        protected string GetRandomStreet()
        {
            string[] cityRus = new string[20] { "Гончарова", "Вахитова", "Льва Толстого", "Гая", "Победы", "Тора", "Капитана Америки", "Самурая", "Ницши", "Харакири", "Винни Пуха", "Сэма Смита", "Диего Капоне", "Дона Карлеонэ", "Марка Твена", "Акита", "Оцу", "Химедзи", "Нара", "Гоголя" };
            return cityRus[rndCityStreet.Next()];
        }

        protected string GetRandomCity()
        {
            string[] cityRus = new string[20] { "Ульяновск", "Москва", "Казань", "Самара", "Саратов", "Торонто", "Монреаль", "Оттава", "Ванкувер", "Виннипег", "Нью-Йорк", "Хьюстон", "Чикаго", "Детройт", "Бостон", "Акита", "Оцу", "Химедзи", "Нара", "Токио" };
            return cityRus[rndCityStreet.Next()];
        }

        protected string GetRandomCountry()
        {
            string[] country = new string[4] { "Россия", "США", "Канада", "Япония" };
            return country[rndCountry.Next()];
        }

        protected int GetRandomIndex()
        {
            return rndIndex.Next(100000, 555555);
        }

        protected int GetRandomBuilding()
        {
            return rndIndex.Next(1, 50);
        }


        protected override void Seed(AddressContext db)
        {
            for (int i = 0; i < 1000; i++) //число фейковых строк
            {
                db.Addreses.Add(new Address
                {
                    Country = GetRandomCountry(),
                    City = GetRandomCity(),
                    Stereet = GetRandomStreet(),
                    BuildingNumber = GetRandomBuilding(),
                    PostID = GetRandomIndex(),
                    DateTime = GetRandomDate()
                });
            }
            base.Seed(db);
        }
    }
}