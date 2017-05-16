Demo: https://pasquale-cs.github.io/copy-elements-jquery/

***

# [EN] - Copy elements jQuery
Plugin copy elements for jQuery

Include "js/pcsCpElements.jquery.js" in your project and use the function "$.pcsCpElement()" in your script.

### Example include plugin (JS):
```html
<body>
  ...
  <script src="js/pcsCpElements.jquery.js"></script>
  ...
</body>
```

### Example use function:
```html
<body>
  ...
  <table id="pcs-cp-container">
    <tr>
      <th>FIELD 1</th>
      <th>FIELD 2</th>
      <th>FIELD 3</th>
    </tr>
    <tr id="pcs-cp-element">
      <td>First</td>
      <td>Second</td>
      <td>Third</td>
    </tr>
  </table>

  <button id="pcs-cp-button">Copy</button>
  ...
  <script>
    $(document).ready(function() {
      $.pcsCpElement({
        container: "#pcs-cp-container", // Set container where copy your element 
        element: "#pcs-cp-element",     // Set copy element
        button: "#pcs-cp-button"        // Set button for copy element
      });
    });
  </script>
  ...
</body>
```

## Do you Like!
Geve me a coffee: https://www.paypal.me/pasqualecs
Thank you =)

***

# [IT] - Copiare elementi con jQuery
Plugin per la copia di elementi nella pagina.

Includere il file "js/pcsCpElements.jquery.js" net tuo progetto e usare la funzione "$.pcsCpElement()" nel tuo script.

### Esempio per l'inclusione del plugin (JS):
```html
<body>
  ...
  <script src="js/pcsCpElements.jquery.js"></script>
  ...
</body>
```

### Esempio per l'uso:
```html
<body>
  ...
  <table id="pcs-cp-container">
    <tr>
      <th>CAMPO 1</th>
      <th>CAMPO 2</th>
      <th>CAMPO 3</th>
    </tr>
    <tr id="pcs-cp-element">
      <td>Primo</td>
      <td>Secondo</td>
      <td>Terzo</td>
    </tr>
  </table>

  <button id="pcs-cp-button">Copia</button>
  ...
  <script>
    $(document).ready(function() {
      $.pcsCpElement({
        container: "#pcs-cp-container", // Set container where copy your element 
        element: "#pcs-cp-element",     // Set copy element
        button: "#pcs-cp-button"        // Set button for copy element
      });
    });
  </script>
  ...
</body>
```

## Ti Piace!
Mi offri un caffè: https://www.paypal.me/pasqualecs
Grazie =)
