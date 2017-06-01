let content = (`
<div class="js-accordion" data-accordion-prefix-id="accordion" data-accordion-prefix-classes="minimalist-accordion">
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">First tab</h2>
   <p>Content of 1st tab</p>
 </div>
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">Second tab</h2>
   <p>Content of 2nd tab</p>
 </div>
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">Third tab</h2>
   <p>Content of 3rd tab</p>
 </div>
</div>
`);

let newContent = (`
<div class="js-accordion" data-accordion-prefix-id="accordion_2" data-accordion-prefix-classes="minimalist-accordion">
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">Fourth tab</h2>
   <p>Content of 4th tab</p>
 </div>
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">Fifth tab</h2>
   <p>Content of 5th tab</p>
 </div>
 <div class="js-accordion__panel">
   <h2 class="js-accordion__header">Sixth tab</h2>
   <p>Content of 6th tab</p>
 </div>
</div>
`);

$(function(){
    //Put new markup in first batch container
    $('#batch-1').append(content)
   
    // Run the accordion
    $('#batch-1 .js-accordion').accordion();
    
    // Add more new content
    $('#batch-2').append(newContent);
    
    // Attempt to only run accordion on new content...
    $('#batch-2 .js-accordion').accordion();
    // ... No luck. Appears that accordion does not yet make distinct IDs
    console.log($('#accordion-00')) // => more than one element comes back!
});