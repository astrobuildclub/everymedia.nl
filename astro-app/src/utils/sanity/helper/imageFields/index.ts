export const imageFields = /* groq */ `
_type,
alt,
hasCaption,
hasCaption == true =>{
caption
},
crop{
_type,
right,
top,
left,
bottom
},
hotspot{
_type,
x,
y,
height,
width,
},
asset->{...}
`
