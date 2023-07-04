document.addEventListener('DOMContentLoaded', function () {
	const stepper = new Stepper(document.querySelector('.bs-stepper'), {
		linear: false,
		animation: true,
	});
	const btnsNext = document.querySelectorAll(`.btn.next`);
	const btnsPrev = document.querySelectorAll(`.btn.prev`);

	btnsNext.forEach(btn => {
		btn.addEventListener('click', () => {
			stepper.next();
		});
	});

	btnsPrev.forEach(btn => {
		btn.addEventListener('click', () => {
			stepper.previous();
		});
	});
});
