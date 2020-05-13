namespace ConsoleTest {
    console.time("js load");
    console.log("Console log");
    console.error("Console error");
    console.info("Console info");
    console.warn("console warn");

    console.groupCollapsed("Multiple");
    let x: number = 10;
    let y: string = "Hallo";
    let a: number[] = [123, 321, 34];
    let o: object = { firstname: "Egzon", lastname: "Demaj", age: 25 };

    console.log(x, y, a, o);
    console.groupEnd();

    console.timeStamp("QuerySelector");
    console.log(document.querySelector("h2"));

    console.groupCollapsed("Count");
    for (let i: number = 0; i < 10; i++) {
        console.count("Counter");
    }
    console.groupEnd();

    console.group("Table");
    let studies: Object[] = [];
    studies.push({ firstname: "Manuel", lastname: "Proß", age: 24 });
    studies.push({ firstname: "Christian", lastname: "Micka", age: 27 });
    studies.push({ firstname: "Vincent", lastname: "Junghans", age: 21 });
    console.table(studies);
    console.groupEnd();

    console.timeEnd("js load");
}
