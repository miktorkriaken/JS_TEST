
let should_restart = 0;

while(should_restart < 2) {

        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?($)", "");

        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) 
            != null && a != " " && b != " " && a.length < 50) {
            should_restart++;
            console.log("should_restart");
            appData.expenses[a] = b;
        } else {
            should_restart=0;
            console.log("should_restart");
        }
};