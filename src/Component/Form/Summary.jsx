import classes from "./Summary.module.scss";

import Form from "../UI/Form";

export default function Summry({ plan, addOns }) {
  return (
    <>
      <Form
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      >
        <div className={classes.selections}>
          <div className={classes.info}>
            <div className={classes.container}>
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
      </Form>
    </>
  );
}
