import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petsService from '../api/petsService.js'
const detailsTemplate = (pet, user, onDelete) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${pet.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        ${pet.isOwner
                        ? html`                        
                            <a href="/edit/${pet._id}" class="edit">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                        : nothing}

                        <!--(Bonus Part) Only for no creator and user-->
                        ${!pet.isOwner && user
                         ? html`<a href="#" class="donate">Donate</a>`
                         : nothing}
                        
                    </div>
                </div>
            </div>
        </section>
`;


export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await petsService.getById(petId);
    if(ctx.user) {
        pet.isOwner = ctx.user._id == pet._ownerId;
    }
    ctx.render(detailsTemplate(pet, ctx.user, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');
        if(choice) {
            console.log(petId)
            await petsService.deleteById(petId);
            ctx.page.redirect('/');
        }
        console.log('Deleted!');
    }
}

