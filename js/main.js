const openButtons = document.querySelectorAll("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const modals = document.querySelectorAll(".modal");

openButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const id = btn.dataset.modalOpen;
		const modal = document.getElementById(id);

		lockBody();
		modal.classList.add("is-open");
	});
});

closeButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		closeAllModals();
	});
});

modals.forEach((modal) => {
	modal.addEventListener("click", (e) => {
		if (e.target === e.currentTarget) {
			closeAllModals();
		}
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeAllModals();
	}
});

function closeAllModals() {
	document.querySelectorAll(".modal.is-open").forEach((modal) => {
		modal.classList.remove("is-open");
	});

	setTimeout(() => {
		unlockBody();
	}, 400);
}

function lockBody() {
	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;

	document.body.style.overflow = "hidden";
	document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockBody() {
	document.body.style.overflow = "";
	document.body.style.paddingRight = "";
}
