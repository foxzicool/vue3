<template>
  <div class="container py-4">
    <!-- Header Cards -->
    <div class="row text-center section bg-section-alt">
      <div class="col-md-3 mb-4" v-for="(item, index) in cards" :key="index">
        <div class="card h-100" :class="'border-' + item.color">
          <div class="card-body">
            <h5 class="card-title" :class="'text-' + item.color">{{ item.title }}</h5>
            <p class="card-text">{{ item.count }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Compliance and Audit Overview Section -->
    <div class="row section bg-section">
      <div class="col-md-6">
        <h4>商品合規率</h4>
        <canvas ref="complianceChart"></canvas>
      </div>
      <div class="col-md-6">
        <h4>近期稽核情形 (稽核商品數)</h4>
        <canvas ref="auditChart"></canvas>
      </div>
    </div>

    <!-- Detailed Audit Statistics -->
    <div class="row section bg-section-alt">
      <div class="col-md-6">
        <h4>Recent Audit Activities</h4>
        <canvas ref="recentAuditChart"></canvas>
      </div>
      <div class="col-md-6">
        <h4>Asset Compliance Rate</h4>
        <canvas ref="assetComplianceRateChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: 'Dashboard',
  data() {
    return {
      cards: [
        { title: '資產總數', count: 1200, color: 'primary' },
        { title: '合規數', count: 800, color: 'success' },
        { title: '未合規數', count: 300, color: 'danger' },
        { title: '未稽核數', count: 100, color: 'secondary' }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initComplianceChart();
      this.initAuditChart();
      this.initRecentAuditChart();
      this.initAssetComplianceRateChart();
    });
  },
  methods: {
    initComplianceChart() {
      const ctx = this.$refs.complianceChart.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Passed', 'Failed', 'Other'],
          datasets: [{
            data: [800, 300, 100],
            backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
            hoverBackgroundColor: ['#66bb6a', '#ef5350', '#fdd835']
          }]
        }
      });
    },
    initAuditChart() {
      const ctx = this.$refs.auditChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Audit Count',
            data: [50, 75, 150, 125, 225],
            backgroundColor: '#2196f3'
          }]
        }
      });
    },
    initRecentAuditChart() {
      const ctx = this.$refs.recentAuditChart.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Last 5 Days', 'Last 10 Days', 'Last 15 Days', 'Last 20 Days', 'Last 25 Days'],
          datasets: [{
            label: 'Number of Audits',
            data: [20, 40, 60, 80, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Recent Audit Activities'
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    initAssetComplianceRateChart() {
      const ctx = this.$refs.assetComplianceRateChart.getContext('2d');
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ['Compliant', 'Non-Compliant', 'Unchecked'],
          datasets: [{
            data: [70, 20, 10],
            backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
            hoverBackgroundColor: ['#66bb6a', '#ef5350', '#fdd835']
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Asset Compliance Rate'
          }
        }
      });
    }
  }
}
</script>


<style scoped>
.section {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}
.bg-section {
  background-color: #e9ecef;
}
.bg-section-alt {
  background-color: #fff;
}
.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
}
.card h5 {
  font-size: 1.25rem;
}
</style>
