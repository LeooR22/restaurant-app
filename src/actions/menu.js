import Swal from "sweetalert2";

export const handleAddToMenu = (id, recipes) => {
  const { title, vegan } = recipes;

  if (JSON.parse(window.localStorage.getItem("menuCard")) === null) {
    let menuCard = [
      {
        id,
        vegan,
      },
    ];
    window.localStorage.setItem("menuCard", JSON.stringify(menuCard));
    Swal.fire(
      "Added !",
      `dish ${title} has been added to the ${
        vegan ? "vegan" : "omnivore"
      } menu`,
      "success"
    );
  } else {
    let menuCard = JSON.parse(window.localStorage.getItem("menuCard"));
    let menuVegan = menuCard.filter((recipe) => recipe.vegan === true);
    let menuOmnivore = menuCard.filter((recipe) => recipe.vegan === false);

    const pushToMenu = () => {
      menuCard.push({ id, vegan });
      window.localStorage.setItem("menuCard", JSON.stringify(menuCard));
      console.log(menuCard);
    };

    if (
      !(menuVegan.length < 2 && vegan === true) &&
      !(menuOmnivore.length < 2 && vegan === false)
    ) {
      return Swal.fire({
        icon: "error",
        title: `Oops... The ${vegan ? "vegan" : "omnivore"} menu is complete`,
        text: "if you want to change the dish, go to the beginning and delete one of the same menu",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    pushToMenu();
    Swal.fire(
      "Added !",
      `dish ${title} has been added to the ${
        vegan ? "vegan" : "omnivore"
      } menu`,
      "success"
    );
  }
};

export const handleDeleteToMenu = (id, menuCard, setMenuCard) => {
  Swal.fire({
    title: "Are you sure?",
    text: "The dish will be removed from the menu!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your dish has been deleted.", "success");
      setMenuCard(menuCard.filter((recipe) => recipe.id !== id));
    }
  });
};
