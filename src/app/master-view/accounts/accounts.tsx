import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomers } from '../../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './accounts.module.css';
import createClassTransformer from '../../style-utils';

IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Accounts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const newAccountDialog = useRef<IgrDialog>(null);
  const dropdown = useRef<IgrDropdown>(null);
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('1');
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout accounts-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout header")}>
                <div className={classes("row-layout page-title")}>
                  <div className={classes("row-layout group_3")}>
                    <img src="/src/assets/Accounts%20Icon%20-%20Green.svg" className={classes("image")} />
                  </div>
                  <h6 className={classes("h6")}>
                    <span>Accounts</span>
                  </h6>
                </div>
                <div className={classes("row-layout buttons")}>
                  <IgrButton variant="flat" type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>business</span>
                    </span>
                    <span key={uuid()}>New Account</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                    <span key={uuid()}>Discover companies</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" type="button" className={classes("button button_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>import_export</span>
                    </span>
                    <span key={uuid()}>Import</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout filters-and-sorting")}>
                <div className={classes("row-layout group_4")}>
                  <IgrSelect outlined="false" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
                    <IgrSelectItem value="1" key="2272b3e6-6b49-43bc-9ef8-063f2e3e5f77">
                      <span key={uuid()}>My Accounts</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="7208f59c-7479-4f13-bfd4-a276d8e15a6d">
                      <span key={uuid()}>All Accounts</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrInput placeholder="Search accounts" outlined="false" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
                <div className={classes("row-layout group_5")}>
                  <IgrButton variant="flat" type="button" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_5")}>
                    <span key={uuid()}>Recently Updated</span>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Name</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Recently Updated</span>
                    </IgrDropdownItem>
                  </IgrDropdown>
                </div>
              </div>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/master-view/account-sample`)}>
              <IgrGrid data={northwindCustomers} primaryKey="contactName" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newAccountDialog}>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <h6 className={classes("h6_1")}>
              <span>New Account</span>
            </h6>
            <div className={classes("column-layout group_7")}>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>ACCOUNT INFORMATION</span>
                </p>
                <div className={classes("row-layout group_9")}>
                  <div className={classes("column-layout group_10")}>
                    <IgrInput label="Account Name" outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrSelect outlined="false" label="Type" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="2b2f01c8-ac82-4a23-b1ba-c6be6b91a418">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="20495bbc-a149-481d-8f60-f90e42e13bbb">
                        <span key={uuid()}>Analyst</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="9c161dd1-d223-4025-bd4a-94dafdcbee53">
                        <span key={uuid()}>Competitor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="465e0f2b-41c4-47ea-8522-47ec8041ef37">
                        <span key={uuid()}>Customer</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="3a1440ce-d0a7-4863-ade0-5681eff1e4ce">
                        <span key={uuid()}>Integrator</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="7bf1cf79-dd1b-472e-9e43-9767ab616e21">
                        <span key={uuid()}>Investor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="11d116d5-39d9-4be5-bb1e-f9b8019fb7a1">
                        <span key={uuid()}>Partner</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="c72b20a0-402b-4d7f-96c8-d800c36349c3">
                        <span key={uuid()}>Press</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="9" key="48806882-f664-4ff1-b08d-9cc57e81fe30">
                        <span key={uuid()}>Prospect</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="10" key="b4b69a6d-55a6-43b1-b433-d876f4c6e5d3">
                        <span key={uuid()}>Reseller</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="11" key="a3302d81-e622-425c-8a06-41159b93460e">
                        <span key={uuid()}>Other</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrInput label="Website" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrTextarea label="Description" outlined="false" className={classes("user-input")}></IgrTextarea>
                  </div>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("column-layout group_11")}>
                      <p className={classes("typography__caption text_1")}>
                        <span>Account Owner</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Andrea Silveira</span>
                      </p>
                    </div>
                    <IgrInput label="Parent Account" placeholder="Search Accounts..." outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="tel" label="Phone" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrSelect outlined="false" label="Industry" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="d0483af4-bc65-4b5d-8c65-5a47b0edd8be">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="36bf1393-77ac-4abf-b9f1-e7b383c21ffc">
                        <span key={uuid()}>Agriculture</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="347e189a-108c-491b-910c-aa39c53b97cb">
                        <span key={uuid()}>Apparel</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="0db47903-3e86-4f40-b423-1edb6a6dbde7">
                        <span key={uuid()}>Banking</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="9fa351fc-eeda-45a4-8d4e-3740ac91e466">
                        <span key={uuid()}>Biotechnology</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="4a3cc712-6f82-43a8-8e28-b00b8d3ee981">
                        <span key={uuid()}>Chemicals</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="15004ba2-663c-48ea-8759-168d1c321856">
                        <span key={uuid()}>Communications</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="bb5bbf22-494d-4c9a-b4c5-69c1b68fbce4">
                        <span key={uuid()}>Construction</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="false" label="Employees" className={classes("user-input")}>
                      <IgrSelectItem value="1" key="a5c8a784-c80d-408e-b1bc-1a9a76030c5a">
                        <span key={uuid()}>Self Employed</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="b3d067de-7be4-4918-a585-4bc33bf474bc">
                        <span key={uuid()}>1-10</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="8cc5c33e-0325-4b66-84c6-a888a662c62f">
                        <span key={uuid()}>11-50</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="8c6aefa0-41cf-44e2-ad72-c7e4150367f7">
                        <span key={uuid()}>51-250</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="ae1840fc-4431-4771-a8af-823d0de3217b">
                        <span key={uuid()}>+250</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout group_12")}>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>BILLING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="8d2fcfae-6b2c-4493-919b-77a1c571c051">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="e1e661d9-b771-4d73-af5b-b19d197a397a">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="1e139ac5-7611-40e8-8eac-8c55023f47a2">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="384c72c7-011f-4c6f-bb56-4b27351086e9">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="d2c56843-5fc0-4ed6-a837-8083528bf762">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>SHIPPING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="4124c46e-bb1a-4922-aded-ad467d67f1c3">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="36d24795-2a61-4703-b75b-8123cb027ab2">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="6da49fab-fab0-4bb1-a967-2e269a54c9e8">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="052218c7-ae21-4a53-8da2-c2c18c8245d6">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="acc899d3-0f58-4f99-bd05-81988b638b71">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton type="button" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Save</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
