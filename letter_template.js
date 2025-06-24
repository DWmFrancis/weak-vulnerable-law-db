
document.addEventListener("DOMContentLoaded", function () {
    const letters = {
        insurrection_act: "Dear [Representative],\n\nI'm writing to express concern over the Insurrection Act...",
        pardon_power: "Dear [Representative],\n\nI urge you to support legislation that limits abuse of the pardon power...",
        appointments_clause: "Dear [Representative],\n\nThe Appointments Clause requires clarification to prevent...",
        emergency_powers: "Dear [Representative],\n\nEmergency powers must be subject to time limits and oversight...",
        hatch_act: "Dear [Representative],\n\nEnforcement of the Hatch Act has proven inadequate in curbing...",
        presidential_records_act: "Dear [Representative],\n\nThe Presidential Records Act needs clearer enforcement mechanisms..."
    };

    const select = document.getElementById("law-select");
    const letterBox = document.getElementById("letter-box");

    select.addEventListener("change", function () {
        const law = select.value;
        letterBox.value = letters[law] || "No template available.";
    });
});
