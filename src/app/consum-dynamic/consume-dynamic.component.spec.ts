import {
  createHostComponentFactory,
  SpectatorWithHost
} from "../../lib/src/host";
import { ConsumeDynamicComponent } from "./consume-dynamic.component";
import { DynamicComponent } from "../dynamic/dynamic.component";

describe("ConsumeDynamicComponent", () => {
  let host: SpectatorWithHost<ConsumeDynamicComponent>;

  const createHost = createHostComponentFactory({
    declarations: [DynamicComponent],
    entryComponents: [DynamicComponent],
    component: ConsumeDynamicComponent
  });

  it("should work", () => {
    host = createHost(`<app-consume-dynamic></app-consume-dynamic>`);
    expect(host.component).toBeDefined();
  });

  it("should render the dynamic component", function() {
    host = createHost(`<app-consume-dynamic></app-consume-dynamic>`);
    expect(host.queryHost(".dynamic")).toHaveText("dynamic works!");
  });
});
