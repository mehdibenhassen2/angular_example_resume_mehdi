import { Component, OnInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js';
import { TranslationEnFrService } from '../../services/translation-en-fr.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-chart_tasks',
  templateUrl: './chart_tasks.component.html',
  styleUrls: ['./chart_tasks.component.scss']
})
export class ChartTasksComponent {

  private chart: am4charts.XYChart;

  //chosse the language translation
  tasks_en = ["Solve bugs", "developer new features", "Review code", 'Team meeting'];
  tasks_fr = ["résoudre les bugs", "Nouvelles fonctionnalités pour les développeurs", "code de révision", "reunion avec les equipes"];
  tasks_to_display = [];

  tasks_trans() {
    if (this.translationEnFrService.language === 'en') {
      this.tasks_to_display = [];
      this.tasks_to_display = this.tasks_en;
    }
    if (this.translationEnFrService.language === 'fr') {
      this.tasks_to_display = [];
      this.tasks_to_display = this.tasks_fr;
    }
  }







  constructor(public translationEnFrService: TranslationEnFrService, private zone: NgZone) { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.PieChart);

      chart.paddingRight = 20;




      chart.data = [{
        tasks_en: 'Fix bugs',
        percentage: 25
      }, {
        tasks_en: 'New features',
        percentage: 50
      }, {
        tasks_en: 'Code Review',
        percentage: 15
      }, {
        tasks_en: 'Meeting',
        percentage: 10
      }];

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'percentage';
      pieSeries.dataFields.category = 'tasks_en';
      pieSeries.colors.list = [
        am4core.color('#845EC2'),
        am4core.color('#FF6F91'),
        am4core.color('#FF9671'),
        am4core.color('#FFC75F'),
        am4core.color('#F9F871')
      ];
      // longeur of line of ticks
      pieSeries.ticks.template.length = 2;
      pieSeries.ticks.template.stroke = am4core.color('#495C43');
      // label (outside the pie)
      pieSeries.labels.template.fontSize = 10;
      pieSeries.labels.template.text = '{tasks_en}';
      pieSeries.alignLabels = true;
      // tooltip
      pieSeries.tooltip.fontSize = '10';
      pieSeries.tooltip.fontWeight = 'normal';
      pieSeries.tooltip.autoTextColor = false;
      pieSeries.tooltip.label.fill = am4core.color('white');
      pieSeries.tooltip.getFillFromObject = false;
      // background transparent for tooltips 
      pieSeries.tooltip.getFillFromObject = false;
      pieSeries.tooltip.background.fill = am4core.color("rgba(255, 0, 0, 0)");
      // border transparent for tooltips
      pieSeries.tooltip.background.stroke = am4core.color("rgba(255, 0, 0, 0)");


      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 1;
      pieSeries.slices.template.strokeOpacity = 1;
      // change the cursor on hover to make it apparent the object can be interacted with
      pieSeries.slices.template.cursorOverStyle = [
        {
          property: 'cursor',
          value: 'pointer'
        }
      ];
      // Create a base filter effect (as if it's not there) for the hover to return to
      const shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0;

      // Create hover state
      // tslint:disable-next-line:max-line-length
      const hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      const hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;


      function showHtml(target) {
        return "<em>{tasks_en}: {percentage} %</em>";
      }

      pieSeries.slices.template.events.on("over", function () {
      });

      // #1: Use an adapter for tooltipHTML, not hover event
      pieSeries.slices.template.adapter.add("tooltipHTML", function (tooltipHTML, target) {
        // #2: If we had used an event, here you would work on the target itself, event.target, not the template.
        // The showHtml might not even be needed, perhaps whatever it does can go in here instead.
        return showHtml(tooltipHTML);
      });
      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 0.5;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
