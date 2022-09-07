function Card(props) {
    return (
<div class="card border-dark mb-3 m-5" >
  <div class="card-header">{props.product}</div>
  <div class="card-body">
    <h4 class="card-title">{props.price}</h4>
    <p class="card-text">{props.description}</p>
  </div>
</div>
    );
}

export default Card;