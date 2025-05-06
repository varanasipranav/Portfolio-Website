import '../Styles/Image.css'
export default function Image(){
return(
<div class="stack">
  <div class="cardd">
    <div class="image"><img src={require('../Assets/Profile.jpeg')}></img></div>
  </div>
</div>
)
}