# 1. Where the position relative and absolute used?
   - relative position: 
      - when you set the elements position to relative, it remains withing the normal flow of the document.
      - the offset value are relative to the elememts normal position in the document flow
    
    - Absolute position: 
      - when you set an element position to absolute it remove from the normal document flow
      - an dits position is calculated relative to its closest initial containing block
      - other element willbe affect by the lement with absolute positioning
      - Absolute positioning is often used for creating overlays popup dialogs or positioning elements precisely within a container

      ex:

      parent(relative)
      child
      subchild(absolute)
      : it work with window and child will relative to parent
# 2.What is difference between display none and visiblity hidden 
- both hide elements from being displayed on a web page but they have different effect on layout and accessibility

  - display none:
    - removes the elements from the documents flow entirely 

  - visibility hidden:
     - hide the element from the view but the element still occupies space in the layout as if it were visible

 - Use: 
  - display none: when you want to completely remove an element from the layout and make it inaccessible to users
  - visibility: hidden: when you want to hide an element visually but still maintain its layout properties and accessbility
  

  # 3difference betweeen margin and padding?

  - margin: 
    - margin ars pace outsde of an elements border
    - they create space between the element and its adjecent elements
    - margins can set using properties like mt, pl, mr, pb

  - padding:
    - padding is the space between an elements content and its border
    - it create space inside the element
    - padding can be set using properties like padding-top padding right padding bottom and padding left
    - padding does not collapse if two adjacent elements have padding they will both be applied independently

    