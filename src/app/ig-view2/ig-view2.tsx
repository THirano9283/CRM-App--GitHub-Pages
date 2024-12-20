import { IgrButton, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrCombo, IgrComboModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from 'igniteui-react';
import { useRef } from 'react';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import styles from './ig-view2.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCheckboxModule.register();
IgrComboModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function IgView2() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")}>
              <IgrStep invalid="true" key={uuid()}>
                <div className={classes("column-layout step-content")} key={uuid()}>
                  <p className={classes("typography__body-1 text")} key={uuid()}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                  </p>
                  <div className={classes("row-layout group_2")} key={uuid()}>
                    <IgrButton type="button" clicked={() => stepper?.current?.next()} className={classes("button")}>
                      <span key={uuid()}>Next</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
                <p slot="title" key={uuid()}>Address</p>
              </IgrStep>
              <IgrStep invalid="true" key={uuid()}>
                <div className={classes("column-layout step-content")} key={uuid()}>
                  <p className={classes("typography__body-1 text")} key={uuid()}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                  </p>
                  <div className={classes("row-layout group_2")} key={uuid()}>
                    <IgrButton type="button" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                      <span key={uuid()}>Prev</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton type="button" clicked={() => stepper?.current?.next()} className={classes("button")}>
                      <span key={uuid()}>Next</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
                <p slot="title" key={uuid()}>Item</p>
              </IgrStep>
              <IgrStep optional="true" key={uuid()}>
                <div className={classes("column-layout step-content")} key={uuid()}>
                  <p className={classes("typography__body-1 text")} key={uuid()}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
                  </p>
                  <div className={classes("row-layout group_2")} key={uuid()}>
                    <IgrButton type="button" clicked={() => stepper?.current?.prev()} className={classes("button")}>
                      <span key={uuid()}>Prev</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrButton type="button" clicked={() => stepper?.current?.reset()} className={classes("button")}>
                      <span key={uuid()}>Reset</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                  </div>
                </div>
                <p slot="title" key={uuid()}>Wrap</p>
                <p slot="subtitle" key={uuid()}>(Optional)</p>
              </IgrStep>
            </IgrStepper>
          </div>
          <div className={classes("row-layout group_3")}>
            <IgrButton type="button" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrCombo outlined="true" data={financialBoxOfficeRevenue} label="Label/Placeholder" displayKey="Franchise" singleSelect="true" className={classes("single-select-combo")}></IgrCombo>
          </div>
          <div className={classes("row-layout group_4")}>
            <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
              <span key={uuid()}>Label</span>
            </IgrCheckbox>
          </div>
        </div>
        <div className={classes("column-layout group")}></div>
        <div className={classes("column-layout group")}></div>
      </div>
    </>
  );
}
