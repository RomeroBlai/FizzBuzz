using Microsoft.AspNetCore.Mvc;


namespace FizzBuzzPrueba.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FizzBuzzController : ControllerBase
    {
        

        [HttpGet("{number}/{maxNumber}")]
        public ActionResult<List<string>> Get(int number, int maxNumber)
        {
            if (maxNumber == 0)
                maxNumber = 100;

            List<string> stringListFizzBuzz = new List<string>();

            DateTime date = DateTime.Now;

            stringListFizzBuzz.Add(date.ToString());

            for (int i = number; i <= (number + maxNumber); i++)
            {
                if (i % 3 == 0 && i % 5 == 0)
                    stringListFizzBuzz.Add("FizzBuzz");
                else if (i % 3 == 0)
                    stringListFizzBuzz.Add("Fizz");
                else if (i % 5 == 0)
                    stringListFizzBuzz.Add("Buzz");
                else
                    stringListFizzBuzz.Add(i.ToString()); 
                
            }
            return stringListFizzBuzz;
        }
    }

}
