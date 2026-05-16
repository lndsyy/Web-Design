// ==========================================
// ACT 1: CONSOLE LOGGING RUNS ON LOAD
// ==========================================
console.log("Hello World"); // [cite: 31]

// ==========================================
// ACT 2: document.getElementById()
// ==========================================
function runAct2() {
    // Dynamically captures element 'text' and changes inner text structure [cite: 32]
    document.getElementById("text").innerHTML = "Hello World"; 
}

// ==========================================
// ACT 3: EXTERNAL JAVASCRIPT
// ==========================================
function runAct3() {
    // Triggers a modal popup alert window dialog instantly [cite: 34]
    alert("Hello World of Javascript"); 
}

// ==========================================
// ACT 4: AUTOMATIC / BY DEFAULT VARIABLE DECLARATION
// ==========================================
function runAct4() {
    // Implicit variable allocation block without structural scopes [cite: 79, 99]
    $name = "Juan DelaCruz"; 
    
    document.getElementById("variable-display").innerHTML = $name;
    console.log("Implicit Variable Value:", $name);
    alert("Implicit Declaration: " + $name);
}

// ==========================================
// ACT 5: VARIABLE DECLARATION USING LET
// ==========================================
function runAct5() {
    // Modern block-scoped strict tracking variables declaration initialization standard [cite: 77, 100]
    let $name = "Juan DelaCruz"; 
    
    document.getElementById("variable-display").innerHTML = $name;
    console.log("Let Variable Value:", $name);
    alert("Let Declaration: " + $name);
}

// ==========================================
// ACT 6: USING window.alert()
// ==========================================
function runAct6() {
    // Directly addressing the root top-level system global window context container execution space [cite: 135]
    window.alert('Hello World'); // [cite: 137]
}

// ==========================================
// ACT 7: USING document.write()
// ==========================================
function runAct7() {
    // Intentionally calls evaluation block runtime layout overwrite mechanisms [cite: 144, 145]
    document.write(5 + 6); // [cite: 147]
}

// ==========================================
// ACT 8: MODIFYING HTML IN 3 WAYS
// ==========================================
function getInnerText() {
    // innerText respects styled layouts and retrieves clean, human-readable display values only [cite: 154, 173]
    alert(document.getElementById("example").innerText); // [cite: 174]
}

function getInnerHTML() {
    // innerHTML pulls raw structured string tokens complete with code tags unchanged [cite: 155, 176]
    alert(document.getElementById("example").innerHTML); // [cite: 177]
}

function getTextContent() {
    // textContent returns raw layout stream literals including hidden whitespace strings [cite: 156, 179]
    alert(document.getElementById("example").textContent); // [cite: 180]
}