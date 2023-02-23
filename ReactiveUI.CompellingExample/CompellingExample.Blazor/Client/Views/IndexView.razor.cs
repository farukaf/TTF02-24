﻿using System;
using System.Linq;
using System.Reactive.Disposables;
using CompellingExample.ViewModels;
using ReactiveUI;

namespace CompellingExample.Blazor.Client.Views
{
    public partial class IndexView 
    {
        private bool _showResults;
        public bool ShowResults
        {
            get => _showResults;
            set
            {
                _showResults = value;
                StateHasChanged();
            } 
        }

        public IndexView()
        {
            ViewModel = new AppViewModel();

            this.WhenActivated(disposableRegistration =>
            {
                this.OneWayBind(ViewModel, 
                        viewModel => viewModel.IsAvailable, 
                        view => view.ShowResults)
                    .DisposeWith(disposableRegistration); 
                
            });
        }

        private void SearchTextChanged()
        {
            //This is really just here for sanity chacking and to make the textbox lose focus.
            Console.WriteLine(ViewModel.SearchTerm);
            Console.WriteLine($"SearchResults is {ViewModel.SearchResults.Count()}");
        }
    }
}
