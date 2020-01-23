// challenge 1

wien = [
["Vienna ", "is", "a", "nice", "city"],
["Vienna", "is ", "a", "nice", "city"],
["Vienna", "is", "a ", "nice", "city"],
["Vienna", "is", "a", "nice ", "city"],
["Vienna", "is", "a", "nice", "city"],
];

document.write(wien[0][0], wien[1][1], wien[2][2], wien[3][3], wien[4][4]);

console.log(wien[0][0], wien[1][1], wien[2][2], wien[3][3], wien[4][4]);

// challenge 2

var x = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$\" properties $flow$down;$actions$flow$up\"."

// document.write(x.replace(new RegExp('$', 'g'), ' '));

var y = new Array();
y = x.split("$");
document.write(y.join(" "));