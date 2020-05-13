// Namespace in PascalCase
namespace L02_HelloWorld {
    window.onload = function () {
        let message: string = "Hello World!";
        this.console.log(message);
        document.getElementById("text").innerHTML = message;
    };
}
