<products>
{{#each this}}
  <product>
    <baseId>{{baseId}}</baseId>
    <isActive>{{isActive}}</isActive>
    <contentType>
      {{#each contentType}}
      <contentTypeValue>{{this.value}}</contentTypeValue>
      {{/each}}
    </contentType>
    <features>
      {{#each feature}}
      <feature>{{this}}</feature>
      {{/each}}
    </features>
    <searchTerms>
      {{#each searchTerms}}
      <searchTermValue>{{this}}</searchTermValue>
      {{/each}}
    </searchTerms>
    <childProducts>
      {{#each childProducts}}
      <childProduct>
        <baseId>{{this.baseId}}</baseId>
        <isActive>{{this.isActive}}</isActive>
        <features>
          {{#each feature}}
          <feature>{{this}}</feature>
          {{/each}}
        </features>
        <searchTerms>
          {{#each searchTerms}}
          <searchTermValue>{{this}}</searchTermValue>
          {{/each}}
        </searchTerms>
      </childProduct>
      {{/each}}
    </childProducts>
  </product>
  {{/each}}
</products>
