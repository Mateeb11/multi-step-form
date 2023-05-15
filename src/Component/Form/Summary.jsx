import classes from "./Summary.module.scss";

import Form from "../UI/Form";

export default function Summry({ plan, addOns }) {
  const calcTotal = () => {
    let total = 0;
    addOns.map((addOn) => {
      total += addOn.price;
    });

    total += plan.price;

    return total;
  };
  return (
    <>
      <Form
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <div className={classes.selections}>
          <div className={classes.info}>
            <div className={classes.plan}>
              {plan.selectedPlan} ({plan.time})<button>Change</button>
            </div>
            <span>
              ${plan.price}/{plan.time === "Monthly" ? "mo" : "yr"}
            </span>
          </div>

          {addOns.length !== 0 && (
            <>
              <span className={classes.line} />
              {addOns.map((addon, i) => {
                return (
                  <div className={classes.info} key={i}>
                    <span className={classes.addOnTitle}>{addon.title}</span>
                    <span className={classes.addOnPrice}>
                      +${addon.price}/{plan.time === "Monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={classes.total}>
          Total (per {plan.time === "Monthly" ? "month" : "year"})
          <span>
            ${calcTotal()}/{plan.time === "Monthly" ? "mo" : "yr"}
          </span>
        </div>
      </Form>
    </>
  );
}
